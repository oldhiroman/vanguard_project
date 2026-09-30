import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect where selectSolution is in index.html
start_marker = "// SELECT SOLUTION"
end_marker = "// INDUSTRY FILTER"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker, start_idx)

if start_idx == -1 or end_idx == -1:
    print("Markers not found, trying alternate search...")
    start_idx = text.find("function selectSolution(")
    end_idx = text.find("function setIndustry(", start_idx)

print(f"selectSolution found at {start_idx} to {end_idx}")
