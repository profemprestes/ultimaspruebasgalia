import os
import json
from typing import List, Dict, Any

def read_file(file_path: str) -> str:
    """Read the content of a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except Exception as e:
        return f"Error reading file {file_path}: {str(e)}"

def create_project_analysis(base_path: str) -> str:
    """Create a text file with the content of important files"""
    
    # Key files to analyze
    files_to_check = [
        # Config files
        "next.config.js",
        "next.config.ts",
        "package.json",
        "tailwind.config.js",
        "tailwind.config.ts",
        "tsconfig.json",
        ".env",
        
        # Core files
        "src/app/layout.tsx",
        "src/app/globals.css",
        "src/lib/firebase.ts",
        "src/ai/ai-instance.ts",
        
        # Components
        "src/components/invitation/LoadingScreen.tsx",
        "src/components/invitation/IntroSection.tsx",
        "src/components/invitation/HeroSection.tsx",
        "src/components/invitation/DetailsSection.tsx",
        "src/components/invitation/BotonFlotanteRegalos.tsx",
        "src/components/invitation/BotonFlotanteMensajes.tsx"
    ]
    
    result = "# Análisis del Proyecto 'Galia's First Adventure'\n\n"
    
    # Add project structure
    result += "## Estructura del Proyecto\n\n"
    project_structure = get_project_structure(base_path)
    result += project_structure + "\n\n"
    
    # Add content of each file
    result += "## Contenido de Archivos Clave\n\n"
    
    for file_path in files_to_check:
        full_path = os.path.join(base_path, file_path)
        if os.path.exists(full_path):
            result += f"### {file_path}\n\n"
            content = read_file(full_path)
            extension = os.path.splitext(file_path)[1]
            
            # Determine language for markdown code block
            language = ""
            if extension in [".js", ".ts", ".tsx", ".jsx"]:
                language = "javascript"
            elif extension == ".css":
                language = "css"
            elif extension == ".json":
                language = "json"
            
            result += f"```{language}\n{content}\n```\n\n"
    
    # Save to file
    output_path = os.path.join(base_path, "project_analysis.txt")
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(result)
    
    return f"Análisis guardado en {output_path}"

def get_project_structure(base_path: str) -> str:
    """Get a text representation of the project structure"""
    result = []
    
    def generate_tree(directory: str, prefix: str = "", is_last: bool = True) -> None:
        result.append(prefix + ("└── " if is_last else "├── ") + os.path.basename(directory) + "/")
        
        # Get all items in the directory
        items = sorted([item for item in os.listdir(directory) if not item.startswith(".")
                       and item not in ["node_modules", ".next", "out", "build", "dist"]])
        
        dirs = [item for item in items if os.path.isdir(os.path.join(directory, item))]
        files = [item for item in items if os.path.isfile(os.path.join(directory, item))]
        
        # Iterate through directories
        for i, dir_name in enumerate(dirs):
            is_last_dir = (i == len(dirs) - 1 and not files)
            new_prefix = prefix + ("    " if is_last else "│   ")
            generate_tree(os.path.join(directory, dir_name), new_prefix, is_last_dir)
        
        # Add files
        for i, file_name in enumerate(files):
            is_last_file = (i == len(files) - 1)
            result.append(prefix + ("    " if is_last else "│   ") + 
                          ("└── " if is_last_file else "├── ") + file_name)
    
    generate_tree(base_path)
    return "\n".join(result)

if __name__ == "__main__":
    # Ask for project path
    project_path = input("Introduce la ruta completa de la carpeta del proyecto: ")
    if not project_path:
        project_path = "."  # Default to current directory
    
    print(create_project_analysis(project_path))
    print("Por favor, comparte el archivo project_analysis.txt generado para revisar el proyecto.")