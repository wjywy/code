export interface G6Props {
    id: string;
    children?: G6Props[];
}

export interface wsProps {
    [key: string]: string[]
}

export function tran(data: wsProps): G6Props {
    const ans = Object.entries(data).map(([key, value]) => {
        // 创建 G6Props 对象，id 为 wsProps 的 key
        const node: G6Props = { id: key };
    
        // 如果 value 是一个非空数组，则递归地将其转换为 children
        if (value.length > 0) {
          // @ts-ignore
          node.children = value.map(childKey => {
            // 在这里我们假设 wsData 已经包含了所有的子节点的定义
            // 如果不是这样，你可能需要一些额外的逻辑来处理未定义的子节点
            const childNode: wsProps = {};
            childNode[childKey] = data[childKey] || []; // 使用空数组作为默认值
            console.log(tran(childNode));
            // @ts-ignore
            return tran(childNode)[0]; // 递归转换并取数组的第一个元素
          });
        }
    
        return node;
      });

      // @ts-ignore
      return ans
}

const wsData: wsProps = {
    "fs": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/confirmOptions.ts"
      ],
      "path": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/confirmOptions.ts",
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/createServer.ts"
      ],
      "pathToFileURL": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/confirmOptions.ts"
      ],
      "CONFIGE_JSON": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/confirmOptions.ts"
      ],
      "defaultConfig": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/confirmOptions.ts"
      ],
      "ConfigProp": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/confirmOptions.ts"
      ],
      "express": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/createServer.ts"
      ],
      "ws": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/createServer.ts"
      ],
      "analysis": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/createServer.ts",
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ],
      "staticPath": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/createServer.ts"
      ],
      "cac": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ],
      "ora": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ],
      "blue": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ],
      "green": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ],
      "yellow": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ],
      "confirmOptions": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ],
      "createServer": [
        "/Applications/open/source-compoennt-plugin/source-component-plugin/packages/cli/src/index.ts"
      ]
  };

  console.log(tran(wsData));