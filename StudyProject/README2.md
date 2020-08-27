# 강좌2

 - [Angular Component](#Angular-Component)



## Angular Component
[위로올라가기](강좌2)

### 컴포넌트란?
> 독립적으로 종작 가능한 UI 요소 <br>
> HTML 템플릿, 스타일과 로직을 결합 (형태 표현과 기능 제어) <br>
> DOM 과 같은 트리 구조로 UI 요소들을 구성 <br>
> W3C 표준 웹컴포넌트 기술을 기반으로 함 <br>
>> `CUSTOM Elements`, `HTML Templates`, `Shadow DOM` : 자기 만의 고유한 DOM, `HTML Import`

> 데코레이터가 달린 클래스를 정의하는 것 <br>
> 데코레이터에 컴포넌트의 메타데이터를 작성 <br>
>> `selector`, `template, templateUrl`, `styles, styleUrls` <br>

#### \app.module.ts
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
> 모듈을 사용할 때에는 `app.module.ts`의 app.module.ts에 컴포넌트가 있어야한다. <br>




