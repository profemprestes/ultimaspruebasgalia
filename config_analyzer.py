import os

def read_file_content(file_path):
    """Lee y devuelve el contenido de un archivo."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except Exception as e:
        return f"Error al leer el archivo {file_path}: {str(e)}"

def main():
    # Directorio base del proyecto
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Archivos a analizar
    files_to_analyze = [
        "next.config.ts",
        "package.json",
        "tailwind.config.ts",
        "tsconfig.json",
        ".env",
        ".gitignore"
    ]
    
    # Crear o sobrescribir el archivo de salida
    output_file = os.path.join(base_dir, "configuracion_proyecto.txt")
    
    with open(output_file, 'w', encoding='utf-8') as output:
        output.write("# Análisis de Configuración del Proyecto 'Galia's First Adventure'\n\n")
        
        for file_name in files_to_analyze:
            file_path = os.path.join(base_dir, file_name)
            
            output.write(f"## {file_name}\n\n")
            
            if os.path.exists(file_path):
                content = read_file_content(file_path)
                output.write("```\n")
                output.write(content)
                output.write("\n```\n\n")
            else:
                output.write(f"El archivo {file_name} no existe en el proyecto.\n\n")
    
    print(f"Análisis completado. Resultados guardados en {output_file}")

if __name__ == "__main__":
    main()