import os
import re

def read_md_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    return content

def read_js_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    return content

def extract_headers(md_content):
    # 匹配二级和三级标题
    # 匹配目录结构中的二级和三级文件夹
    pattern = r'│  ├─\s+(.+)|│  │  ├─\s+(.+)|│  │  └─\s+(.+)|│  └─\s+(.+)'
    folders = []
    current_l2 = None
    
    for line in md_content.split('\n'):
        match = re.match(pattern, line)
        if match:
            # 获取二级文件夹
            if match.group(1):
                current_l2 = match.group(1)
            # 获取三级文件夹并组合路径
            elif match.group(2) or match.group(3):
                l3 = match.group(2) if match.group(2) else match.group(3)
                if current_l2:
                    folders.append(f"{current_l2}/{l3}")
            # 处理二级文件夹的最后一个条目
            elif match.group(4):
                current_l2 = match.group(4)
    return folders
    

def check_headers_in_js(headers, js_content):
    missing_headers = []
    for header in headers:
        # 在JS内容中查找标题
        if header not in js_content:
            missing_headers.append(header)
    return missing_headers

def main():
    md_file = './check-code/dynamic-skin-tree.md'
    js_file = './extension-code/十周年UI/dynamicSkin.js'
    
    if not os.path.exists(md_file) or not os.path.exists(js_file):
        print("Error: Required files not found")
        return
    
    md_content = read_md_file(md_file)
    js_content = read_js_file(js_file)
    
    headers = extract_headers(md_content)
    missing_headers = check_headers_in_js(headers, js_content)
    # Create check-code directory if it doesn't exist
    if not os.path.exists('check-code'):
        os.makedirs('check-code')
        
    # Create or overwrite missing_headers.txt in check-code directory
    missing_headers_path = 'check-code/missing_headers.txt'
    with open(missing_headers_path, 'w', encoding='utf-8') as f:
        if missing_headers:
            f.write("以下标题在dynamicSkin.js中未找到:\n")
            for header in missing_headers:
                f.write(f"- {header}\n")
        else:
            f.write("所有标题都在dynamicSkin.js中找到了匹配\n")
    


if __name__ == "__main__":
    main()
