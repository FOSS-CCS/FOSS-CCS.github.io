#!/usr/bin/env python3
from sys import argv, exit, version_info
import os
import shlex

DATA = ""

def print_help():
    help = """\
help/?/h        Print help.
                >>> help
replace         Replace all first string occurences with the second.
                >>> replace "string in file" "replacement string"
save            Save file to the given path.
                >>> save path/to/save
quit/q/exit     To quit
                >>> quit"""
    print(help)

def load_svg(filePath):
    global DATA
    print(f"Reading file {filePath}... ", end="")
    with open(filePath, "r") as f:
        DATA = f.read()
    print("done")


def interpret_cmd(cmd):
    global DATA
    cmd = shlex.split(cmd) or [""]

    match cmd[0].lower():
        case "help" | "?" | "h":
            print_help()

        case "data":
            print(DATA)

        case "replace":
            if len(cmd) != 3:
                print(f"This command takes 2 arguments, {len(cmd) - 1} found")
                return

            num_of_occurences = DATA.count(cmd[1])

            DATA = DATA.replace(cmd[1], cmd[2])

            print(f"Replaced {num_of_occurences} occurences")

        case "save":
            try:
                filePath = cmd[1]
            except IndexError:
                print("Save path not provided")
                return

            if os.path.isfile(filePath):
                while True:
                    choice = input(f"\"{filePath}\" already exists. Want to continue? [y/n]: ").strip().lower()
                    if choice == "y":
                        break
                    elif choice == "n":
                        return
                    else:
                        print(f"Invalid choice: {choice}")

            with open(filePath, "w") as f:
                f.write(DATA)

        case "quit" | "q" | "exit":
            print("Quitting..")
            exit()

        case "":
            pass

        case _:
            print(f"Invalid command: \"{cmd[0]}\"\nUse help/h/? to get help")

def main():
    assert version_info >= (3, 10), "Python 3.10 or higher is required to run this program"

    if len(argv) < 2:
        print("Expected a file path")
        exit(-1)

    filePath = argv[1]
    if not os.path.isfile(filePath):
        print(f"Invalid file path: {filePath}")
        exit(-1)

    print(f"File Path: {filePath}")
    if (filePath[-4::] != ".svg"):
        print(f"Not a SVG file: {filePath}")
        exit(-1)

    load_svg(filePath)
    print("Use ? to get help")

    while True:
        try:
            cmd = input(">>> ")
        except EOFError:
            print()
            interpret_cmd("quit")
        else:
            interpret_cmd(cmd)

if __name__ == "__main__":
    main()


