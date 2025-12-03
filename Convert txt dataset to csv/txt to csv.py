import csv

# Input and output files
input_file = "C:/Users/omara/Desktop/txt to csv/rockyou.txt"
output_file = "C:/Users/omara/Desktop/txt to csv/rockyou_dataset.csv"

cleaned_lines = []

with open(input_file, 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        line = line.rstrip('\n')  # Remove newline
        
        # Skip if line starts with whitespace
        if not line or line[0].isspace():
            continue
        
        # Remove non-printable characters (keep only ASCII 32-126)
        line = ''.join(c for c in line if 32 <= ord(c) <= 126)
        
        # Skip if line contains any whitespace inside
        if any(c.isspace() for c in line):
            continue
        
        # Skip empty lines after cleaning
        if line:
            cleaned_lines.append([line])

# Write to CSV
with open(output_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['password'])  # header
    writer.writerows(cleaned_lines)

print(f"Cleaned CSV saved to {output_file}")
