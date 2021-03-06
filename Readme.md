# Notepad2-mod

> _A modified version (fork) of Notepad2 based on Kai Liu's and other people's patches._

[![Build status](https://ci.appveyor.com/api/projects/status/09rkgo5j2nqnqqdy?svg=true)](https://ci.appveyor.com/project/McNeight/notepad2-mod) [![Coverity Scan Build Status](https://img.shields.io/coverity/scan/1113.svg)](https://scan.coverity.com/projects/1113)

## Changes compared to Notepad2 v4.2.25

- Code folding
- Support for bookmarks
- Option to mark all occurrences of a word
- Word auto-completion
- Syntax highlighting support for

  - Apache Config Files (.htaccess)
  - Assembler
  - AutoIt3 Script
  - AviSynth Script
  - Bash Shell Script
  - Batch Files
  - C/C++ Source Code
  - C# Source Code
  - CMake Script
  - CoffeeScript
  - Configuration Files (.ini)
  - Cascading Style Sheets (CSS)
  - Diff Files
  - HTML
  - Inno Setup Script
  - Java
  - JavaScript
  - LaTeX
  - Lua Script
  - Makefiles
  - Markdown
  - MATLAB
  - NSIS Script
  - Pascal
  - Perl Script
  - PowerShell Script
  - Python Script
  - Registry Files (.reg)
  - Resource Script (.rc)
  - Ruby Script
  - SQL
  - Tcl Script
  - VBScript
  - VHDL scripts
  - Visual Basic Source Code
  - XML
  - YAML

- Improved support for NFO ANSI art

- Support for replacing Windows Notepad using a clean, unintrusive registry-based method

- Other various minor changes and tweaks

## Supported Operating Systems:

- XP (SP3, SP2 might or might not work), Vista, 7, 8, 8.1 and 10 both 32-bit and 64-bit

## [Screenshots](https://xhmikosr.github.io/notepad2-mod/screenshots)

## Notes:

- If you find any bugs or have any suggestions for the implemented lexers (and **not** only) feel free to **provide patches/pull requests**. Without patches or pull requests chances are that nothing will be fixed/implemented.
- I'm not interested in any **localization** of Notepad2.

## Contributors:

- [Florian Balmer](http://www.flos-freeware.ch/notepad2.html)
- [Kai Liu](http://code.kliu.org/misc/notepad2/)
- [RL Vision](http://www.rlvision.com/notepad2/about.asp)
- Aleksandar Lekov
- Bruno Barbieri
- Neil McNeight

## More information:

- [Original Notepad2 website](http://www.flos-freeware.ch/notepad2.html)
- [Kai Liu's website](http://code.kliu.org/misc/notepad2/)
- [RL Vision Bookmark Edition website](http://www.rlvision.com/notepad2/about.asp)
- [Code folding usage guide](https://github.com/XhmikosR/notepad2-mod/wiki/Code-Folding-Usage)

## Changed keyboard shortcuts compared to Notepad2:

- <kbd>Ctrl+Alt+F2</kbd>

  Expand selection to next match.

- <kbd>Ctrl+Alt+Shift+F2</kbd>

  Expand selection to previous match.

- <kbd>Ctrl+Shift+Enter</kbd>

  New line with toggled auto indent option.

You can use WDK 7.1 or MSVC 2015 to build Notepad2-mod.
