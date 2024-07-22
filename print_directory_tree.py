import os

def print_directory_tree(path, ignore_dirs=["node_modules"], level=2, indent=""):
    if level < 1:
        return

    files = [f for f in os.listdir(path) if f not in ignore_dirs]
    files.sort()

    for file in files:
        full_path = os.path.join(path, file)
        print(indent + "├── " + file)
        if os.path.isdir(full_path):
            if level > 1:
                print_directory_tree(full_path, ignore_dirs, level - 1, indent + "│   ")

root_directory = "."
print(root_directory)
print_directory_tree(root_directory)
