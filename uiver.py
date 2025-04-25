import os

# Directorio a listar
ui_directory = 'g:/01-Galia/ultimaspruebasgalia/src/components/ui'

# Archivo de salida
output_file = 'g:/01-Galia/ultimaspruebasgalia/ui_contents.txt'

# Verificar si el directorio existe
if os.path.exists(ui_directory):
    with open(output_file, 'w', encoding='utf-8') as f:
        # Recorrer los archivos en el directorio
        for filename in os.listdir(ui_directory):
            file_path = os.path.join(ui_directory, filename)
            if os.path.isfile(file_path):
                f.write(f'Archivo: {filename}\n')
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    f.write(content + '\n\n')
else:
    print(f'El directorio {ui_directory} no existe.')