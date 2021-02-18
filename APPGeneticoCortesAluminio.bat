REM Creado por HTML Compiler v2018.12
REM ©2018 HTML Compiler, David Esperalta
REM Más información en www.davidesperalta.com

@ECHO OFF
CLS

REM Guardamos en la variable PROJECT la ruta del archivo de nuestro proyecto
SET PROJECT="C:\Users\Caren\Desktop\dev2\cortes\APPGeneticoCortesAluminio\APPGeneticoCortesAluminio.hcp"

REM Guardamos en la variable COMPILER la ruta de la versión CMD de HTML Compiler
SET COMPILER="C:\Program Files\David Esperalta\HtmlCompiler\HtmlCompilerCmd.exe"

REM Ejecutamos el compilador pasándole como argumento el archivo de nuestro proyecto
%COMPILER% %PROJECT%

REM Pausa para ver los resultados de la compilación
PAUSE

