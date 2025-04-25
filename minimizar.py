import re
import os

def minimizar_archivo(ruta_entrada, ruta_salida):
    """
    Minimiza el contenido de un archivo de texto, eliminando espacios innecesarios
    y optimizando la estructura para reducir su tamaño.
    
    Args:
        ruta_entrada: Ruta al archivo original
        ruta_salida: Ruta donde se guardará el archivo minimizado
    """
    try:
        # Leer el archivo original
        with open(ruta_entrada, 'r', encoding='utf-8') as archivo:
            contenido = archivo.read()
        
        # Minimizar el contenido
        # 1. Eliminar líneas vacías consecutivas
        contenido = re.sub(r'\n\s*\n', '\n\n', contenido)
        
        # 2. Minimizar bloques de código JSON/JavaScript
        def minimizar_bloque_codigo(match):
            codigo = match.group(1)
            # Eliminar comentarios de una línea
            codigo = re.sub(r'//.*?\n', '\n', codigo)
            # Eliminar espacios al inicio de líneas
            codigo = re.sub(r'\n\s+', '\n', codigo)
            # Eliminar líneas vacías en bloques de código
            codigo = re.sub(r'\n+', '\n', codigo)
            return f"```{match.group(0).split('```')[0]}```\n{codigo}\n```"
        
        contenido = re.sub(r'```(javascript|json|typescript)[\s\S]*?```', minimizar_bloque_codigo, contenido)
        
        # 3. Minimizar la estructura del proyecto
        if "## Estructura del Proyecto" in contenido:
            estructura_match = re.search(r'## Estructura del Proyecto\n\n```([\s\S]*?)```', contenido)
            if estructura_match:
                estructura = estructura_match.group(1)
                # Simplificar la estructura manteniendo solo directorios principales
                estructura_simplificada = []
                for linea in estructura.split('\n'):
                    if '/' in linea and not linea.strip().endswith('/'):
                        # Simplificar archivos dentro de directorios
                        if re.search(r'│   │   │   └─', linea) or re.search(r'│   │   ├─', linea):
                            continue
                    estructura_simplificada.append(linea)
                
                nueva_estructura = '\n'.join(estructura_simplificada)
                contenido = contenido.replace(estructura_match.group(1), nueva_estructura)
        
        # 4. Crear versión resumida de archivos largos
        def resumir_archivo(match):
            nombre_archivo = match.group(1)
            contenido_archivo = match.group(2)
            
            # Si el contenido es muy largo, resumirlo
            if len(contenido_archivo) > 500:
                lineas = contenido_archivo.split('\n')
                if len(lineas) > 20:
                    # Mantener primeras y últimas líneas
                    contenido_resumido = '\n'.join(lineas[:10]) + '\n// ... código resumido ...\n' + '\n'.join(lineas[-5:])
                    return f"### {nombre_archivo}\n\n```\n{contenido_resumido}\n```"
            
            return match.group(0)
        
        contenido = re.sub(r'### (.*?)\n\n```\n([\s\S]*?)```', resumir_archivo, contenido)
        
        # Escribir el contenido minimizado en el archivo de salida
        with open(ruta_salida, 'w', encoding='utf-8') as archivo_salida:
            archivo_salida.write("# Análisis del Proyecto 'Galia's First Adventure' (Versión Minimizada)\n\n")
            archivo_salida.write(contenido)
            
        print(f"Archivo minimizado creado exitosamente en: {ruta_salida}")
        return True
        
    except Exception as e:
        print(f"Error al minimizar el archivo: {str(e)}")
        return False

if __name__ == "__main__":
    # Rutas de archivos
    ruta_entrada = "g:/01-Galia/ultimaspruebasgalia/project_analysis.txt"
    ruta_salida = "g:/01-Galia/ultimaspruebasgalia/project_analysis_min.txt"
    
    # Ejecutar la minimización
    minimizar_archivo(ruta_entrada, ruta_salida)