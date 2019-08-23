expression = "([a-zA-Z]+y|[a-zA-Z]+ee|[a-zA-Z]+i|[a-zA-Z]+ie)(,)"
name = []
for j in re.finditer(expression, str):
     name.append(j.group(1))