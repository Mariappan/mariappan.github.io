---
title: "Bash scripting tips"
path: "/bash"
date: "2020-04-22"
author: "Mariappan Ramasamy"
excerpt: 'Bash scripting cheat sheets'
tags: ["bash", "cheatsheet"]
---

## Tips


| Syntax                        | Meaning                                                         |
|-------------------------------|-----------------------------------------------------------------|
| ${parameter:-defaultValue}    | Get default shell variables value                               |
| ${parameter:=defaultValue}    | Set default shell variables value                               |
| ${parameter:?"Error Message"} | Display an error message if parameters is not set               |
| ${#var}                       | Find the length of the string                                   |
| ${var%pattern}                | Remove the shortest rear (end) pattern                          |
| ${var%%pattern}               | Remove the longest rear (end) pattern                           |
| ${var:num1:num2}              | Substring                                                       |
| ${var#pattern}                | Remove the shortest front pattern                               |
| ${var##pattern}               | Remove the longest front pattern                                |
| ${var/pattern/string}         | Find and replace one occurence                                  |
| ${var//pattern/string}        | Find and replace all occurence                                  |
| ${!prefix*}                   | Expands to the names of variables whose names begin with prefix |
| ${var,}                       | Convert first character to lowercase                            |
| ${var,pattern}                | Convert first character to lowercase                            |
| ${var,,}                      | Convert all characters to lowercase                             |
| ${var,,pattern}               | Convert all characters to lowercase                             |
| ${var^}                       | Convert first character to upper case                           |
| ${var^^}                      | Convert all characters to upper case                            |


> Move to python or high level scripting language once the complexity increases
