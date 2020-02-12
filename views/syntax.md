EJS syntax:
1. <% ‘Scriptlet’ tag, for control-flow, no output
2. <%\_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
3. <%= Outputs the value into the template (HTML escaped)
4. <%- Outputs the unescaped value into the template
5. <%# Comment tag, no execution, no output
6. <%% Outputs a literal ‘<%’
7. %> Plain ending tag
8. -%> Trim-mode (‘newline slurp’) tag, trims following newline
9. \_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it