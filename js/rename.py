import os
from PIL import Image
"""
Creamos una función en Python para renombrar las fotos... 
Que cuando llegue el momento crearemos una vista 
y es mejor que todas tengan el mismo nombre para procesar las imágenes.
"""
PARENT_DIRECTORY = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

ruta_relativa = "img/resource/"
prefijo_comun = "antartica"

def renombrar_archivos():

    #por si quieres evitar renombrar alguna imagen
    nombres_protegidos = []
    directorio_imagenes = os.path.join(PARENT_DIRECTORY, ruta_relativa)

    for i, foto in enumerate(os.listdir(directorio_imagenes)):
        foto_path = os.path.join(directorio_imagenes, foto)
        #nos aseguramos que no hay un directorio dentro al iterar.
        if os.path.isdir(foto_path):
            print("Subdirectorio encontrado: ", foto_path)
        else:
            archivo_antiguo = foto_path
            nuevo_nombre = prefijo_comun + "-" + str(i)+".jpg"
            archivo_nuevo = os.path.join(directorio_imagenes, nuevo_nombre)
            os.rename(foto_path, archivo_nuevo)
            print("Archivo renombrado:", foto_path, "->", archivo_nuevo, "\n")
                



if "__main__" == __name__:
    renombrar_archivos()


