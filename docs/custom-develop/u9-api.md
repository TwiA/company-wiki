---
order: 2
group:
  title: U9
  order: 2
---


# 接口开发

U9 提供了4种接口开发方式，每种方式逻辑层都是依赖服务，U9C的所有接口都是该种服务，即是WCF服务

推荐使用`自定义API`开发

对外接口统一用以下格式响应 (客户有要求除外)
```json
{
  "code": 200,
  "message": "成功",
  "success": true,
  "data": {} | []
}
``` 

## 自定义API

标准OPENAPI功能可能功能不全或其他问题，有时需要自定义OPENAPI功能。

这时支持两种OPENAPI方式，一种是带鉴权的与标准OPENAPI一致，另外一种是不带鉴权的。

:::info{title='提示'}
自定义控制器不能与现有控制器重名，并需要安装相关补丁 
:::

### 鉴权

VS创建类选择.NETFramework 4.5版本。

引用两个文件`UFSoft.UBF.MVC`和`System.Web.Http`

`UFSoft.UBF.MVC`位置：`X:\yonyou\U9CE\Portal\bin\UFSoft.UBF.MVC.dll`

`System.Web.Http`位置：`X:\yonyou\U9CE\Portal\bin\System.Web.Http.dll`

类名必须以`Controller`结尾，并继承`OpenAPIController`

### 项目结构

![项目结构](/img.png)

自定义控制器

```c
public class TestController: OpenAPIController
{
    [HttpGet]
    public ApiResult<string> Check()
    {
        var result = new ApiResult<string>();
        result.Data = "自定义OPENAPI成功";
        return result;
    }

    [HttpPost]
    public ApiResult<int> Calc([FromBody] InputDtoData input)
    {
        var result = new ApiResult<int>();
        result.Data = (input.InputA + input.InputB) * 3;
        return result;
    }

    public class InputDtoData
    {
        public int InputA { get; set; }
        public int InputB { get; set; }
    }
}
```

### 调试

部署完成之后，重启IIS，浏览`http://127.0.0.1/U9C/Swagger`查看自定义的带鉴权OPENAPI

![image.png](/img_2.png)
![image.png](/img_1.png)



鉴权部分参考[openpai](openapi.md)或白名单关闭后输入`Token`后测试验证。

![image.png](/img_3.png)

![image.png](/img_4.png)


## WebApi

## 服务

## 官方API
