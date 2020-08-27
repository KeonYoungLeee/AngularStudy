# 강좌2

 - [Angular Component](#Angular-Component)
 - [Angular Component2](#Angular-Component2)



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


 - [Angular Component2](#Angular-Component2)

## Angular Component2
[위로올라가기](강좌2)

<pre><code>ng generate component <컴포넌트 명> --inline-templete --inline-style
ng g c sample -it -is
> CREATE src/app/sample/sample.component.spec.ts (628 bytes)
> CREATE src/app/sample/sample.component.ts (265 bytes)
> UPDATE src/app/app.module.ts (475 bytes)</code></pre>
> inline style으로 적용 <br>

<pre><code>ng generate component <컴포넌트 명> 
ng g c sample2
> CREATE src/app/sample2/sample2.component.html (22 bytes)
> CREATE src/app/sample2/sample2.component.spec.ts (635 bytes)
> CREATE src/app/sample2/sample2.component.ts (280 bytes)
>CREATE src/app/sample2/sample2.component.scss (0 bytes)
> UPDATE src/app/app.module.ts (561 bytes)</code></pre>
> 완전한 컴포넌트 형식으로 만들어준다 (추천) <br>

왜 컴포넌트를 생성하면 app이 자동적으로 붙은건지 잘 모르겠다 <br><br>
#### \Front\angular.json
> `"prefix": "app",` 를 보면 prefix에 app이 지정되어져있다. <br>

#### \Front\src\app\sample2\sample2.component.ts
```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss']
})
export class Sample2Component implements OnInit {

  // 클래스 내용을 여기서 표현이 가능하다.
  name = 'mark' // name을 view표현을 해줄 것이다.

  constructor() { }

  ngOnInit(): void {
    // 이 부분에서 name의 데이터를 바꾸어 주었다.
    // 로직을 짜는 부분
    setTimeout(() => {
      this.name = 'LEE';
    }, 2000);
  }

  // 메서드 작성

}
```

#### \Front\src\app\sample2\sample2.component.html
```html
<p>sample2 works!</p>
<p>name : {{ name }}</p> <!-- 표현식 -->
```

#### \Front\src\app\sample2\sample2.component.html
```html
<p>sample2 works!</p>
<p>name : {{ name }}</p>
<button (click)="onClickMe($event)">Click me!</button>
```
> 버튼을 누르는 행위를 할 것이다. <br>
> 앵귤러의 특징은 `()`를 해준다. 그리고 `this`를 뺸 메소드 명을 작성한다. <br>
> 이벤트 발생하기 위해서는 `$`를 입력해줘야한다. <br>

#### \Front\src\app\sample2\sample2.component.ts
```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss']
})
export class Sample2Component implements OnInit {

  name = 'mark';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'LEE'
    }, 2000);
  }

  // 메서드 생성
  onClickMe(event: Event) { // event 매개 변수
    console.log(event) 
    this.name = 'btnchange'
  }
}

```

