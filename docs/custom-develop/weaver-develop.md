---
order: 3
group:
  title: 泛微
  order: 3
---

# E9

## 开发

### OA接口配置

## 部署

### 测试环境

### 正式环境

先把 `测试环境` OA 流程表单 导入 `正式环境`

**1. 维护`测试环境` OA接口配置**

修改 `数据库表名` 字段

**2. 导入`测试环境` OA接口配置 到 `正式环境`**

**3. 修改`正式环境` OA接口配置**

在数据库插入 appKey

```sql
INSERT INTO ECOLOGY_BIZ_EC(ID, APPID, NAME)
VALUES ('123456', 'test', 'SAP测试接口');
COMMIT;
```

修改 业务类型 commonConfig 	

``` json
{
  "address": "http://192.168.12.5:62435",
  "appKey": "e5aa3164-0134-4119-9a1d-4becebb4b54b",
  "oaAddress": "http://192.168.12.5:62435",
  "sapAddress": "https://cpi-dp-4xgo6z4s.it-cpi010-rt.cpi.cn40.apps.platform.sapcloud.cn/cxf/Common/Soap/Interface/600",
  "sapUsername": "sb-6510096e-9aee-485b-9e3b-e73b8157efac!b3190|it-rt-cpi-dp-4xgo6z4s!b39",
  "sapPassword": "2173f119-e06e-4465-91b3-1ba9a0a1871d$rkRasnuyXtwV5dE6F5VnUgJ2vC7SO89-TTpKbRJEVzE="
}
```

| key         | 值                         |
|-------------|---------------------------|
| address     | OA地址                      |
| appKey      | 插入 ECOLOGY_BIZ_EC 表的appId |
| oaAddress   | OA地址                      |
| sapAddress  | Sap接口地址                   |
| sapUsername | Sap接口用户名                  |
| sapPassword | sap接口密码                   |

**4. 修改代码**

将 TestAction 类 复制到 ProAction 

**5. 配置webService接口**

:::info{title='提示'}
先在测试环境试下下面配置
:::

修改`ecology\classbean\META-INF\xfire\services.xml`

```xml
<!-- Pro -->
<service>
    <!--接口名称-->
    <name>ProWebService</name>
    <!--命名空间  包名 package-->
    <namespace>com.seneasy.sap.webservice</namespace>
    <!--接口名称-->
    <serviceClass>com.seneasy.sap.webservice.ProWebService</serviceClass>
    <!--实现类名-->
    <implementationClass>com.seneasy.sap.webservice.impl.ProWebServiceImpl</implementationClass>
</service>
<!-- Pro -->
```

查看 http://192.168.12.5:62435/services 地址是否存在 `ProWebServiceImpl`

**6. 修改对应流程节点事件**

![项目结构](/img_5.png)
![项目结构](/img_6.png)