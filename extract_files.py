import os

def read_file_content(file_path):
    """Lee y devuelve el contenido de un archivo."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except Exception as e:
        return f"Error al leer el archivo {file_path}: {str(e)}"

def main():
    # Definir las rutas de los archivos
    base_path = "g:/01-Galia/ultimaspruebasgalia"
    output_file = f"{base_path}/componentes_galia.txt"
    
    files_to_read = [
        # Archivos principales
        f"{base_path}/src/app/page.tsx",
        f"{base_path}/src/app/layout.tsx",
        
        # Componentes de invitación
        f"{base_path}/src/components/invitation/LoadingScreen.tsx",
        f"{base_path}/src/components/invitation/IntroSection.tsx",
        f"{base_path}/src/components/invitation/HeroSection.tsx",
        f"{base_path}/src/components/invitation/DetailsSection.tsx",
        f"{base_path}/src/components/invitation/BotonFlotanteRegalos.tsx"
    ]
    
    # Abrir el archivo de salida
    with open(output_file, 'w', encoding='utf-8') as output:
        output.write("# Componentes de la Invitación Digital de Galia\n\n")
        
        # Leer y escribir el contenido de cada archivo
        for file_path in files_to_read:
            file_name = os.path.basename(file_path)
            output.write(f"\n{'=' * 80}\n")
            output.write(f"Archivo: {file_name}\n")
            output.write(f"Ruta: {file_path}\n")
            output.write(f"{'=' * 80}\n\n")
            
            content = read_file_content(file_path)
            output.write(content)
            output.write(f"\n\n{'=' * 80}\n")
    
    print(f"Extracción completada. Resultados guardados en {output_file}")

if __name__ == "__main__":
    print("Extrayendo contenido de archivos de la invitación de Galia...")
    main()
    print("\nExtracción completada.")