# 강좌2

 - [Angular Component](#Angular-Component)
 - [Angular Component2](#Angular-Component2)
 - [Angular Component3](#Angular-Component3)
 - [Angular Component4](#Angular-Component4)
 - [Angular Component 연결1](#Angular-Component-연결1)
 - [Angular Component 연결2](#Angular-Component-연결2)



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


## Angular Component3
[위로올라가기](강좌2)

> 이것은 데이터(클래스)와 뷰(템블릿)의 이야기
> 데이터가 바뀌면 뷰는 자동으로 바뀐다.
> 데이터를 바꾸려면 사용자의 입력이 필요하다
>> 항상 그런것은 아니다. (Electron)
> 사용자가 입력함과 동시에 뷰를 바꾸려면 ***양방향 데이터 바인딩***을 사용한다.
>> 대표적으로 `[()]`, `[(ngModel)]`

### 양방향 데이터 바인딩 개념 잡기
#### StudyProject\Front\src\app\sample2\sample2.component.html
```html
<p>sample2 works!</p>
<p>name : {{ name }}</p>
<button (click)="onClickMe($event)">Click me!</button>

<!-- 양방형 데이터 바인딩 적용하기 -->
<input type="text" [(ngModel)]="name" >
<!-- 이 대로하면 에러가 나온다. ngModel이 양방형 데이터를 지원하는데 input은 Form태그이다 -->
<!-- 그래서, FormModule을 사용해야한다. -->
```

#### StudyProject\Front\src\app\app.module.ts
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 추가

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sample2Component } from './sample2/sample2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
> **양향형 바인딩이므로, ***데이터랑 뷰가 일치***하면서, 바뀔 때도 같이 바뀐다.**

### Component 간 통신 (의존 관계:부모 자식관계)
> 컴포넌트 트리 상에 붙어 있다면 ? => ***@input, @Ouput***
> 붙어있지 않다면?
>> 같은 가지에 있다면? (부모&자식관계가 아니라 자식&할아버지 관계)
>> 같은 가지가 아니라면? => 중개자, 서비스

### 템플릿과 데이터 바인딩(props 전달하는 방법)
> `<app-sample test="문자열"></app-sample>`

#### StudyProject\Front\src\app\app.component.html
```html
<div>Angular Study</div>
<app-sample2></app-sample2>
<app-sample3 propsTest="props Test hello props Test"></app-sample3>
<!-- propsTest이름명 일치 -->

<!-- 이거는 변수명을 전달하는 것이다. -->
<app-sample3 [propsTest]="props Test hello props Test"></app-sample3>

<router-outlet></router-outlet>
```
> `[]`의 의미는 나중에 알아본다.

#### StudyProject\Front\src\app\sample3\sample3.component.html
```html
<p>sample3 works!</p>
<div>sample3 propsTest => {{ propsTest }} </div>
<!-- propsTest이름명 일치 -->
```

#### StudyProject\Front\src\app\sample3\sample3.component.ts
```js
import { Component, OnInit, Input } from '@angular/core'; // input을 추가해줘야한다.

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.scss']
})
export class Sample3Component implements OnInit {

  @Input() propsTest: string; // propsTest이름명 일치
  

  constructor() { }

  ngOnInit(): void {
  }
}
```
> Input을 추가해줘야한다. <br>
> 전달을 하는 props이름과 변수 명이 일치해야한다. <br>

### 배열 데이터를 변수에 담아서 props에 전달하기
> `<app-sample [test]="변수명"></app-sample>`

#### StudyProject\Front\src\app\app.component.html
```html
<div>Angular Study</div>
<app-sample2></app-sample2>
<app-sample3 propsTest="props Test hello props Test"></app-sample3>
<app-sample3 *ngFor="let fruits of fruits" [furitsList]="fruits"></app-sample3> 
<!-- [] <-잘 숙지해주기 -->
<router-outlet></router-outlet>
```

#### StudyProject\Front\src\app\app.component.ts
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-quick-start';
  fruits = ['apple', 'banana', 'graph']; // 배열 추가
}

```

#### StudyProject\Front\src\app\sample3\sample3.component.html (props)
```html
<p>sample3 works!</p>
<div>sample3 propsTest => {{ propsTest }} </div>
<div>sample3 propsTest => {{ furitsList }} </div>
```

#### StudyProject\Front\src\app\sample3\sample3.component.ts (props)
```js
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.scss']
})
export class Sample3Component implements OnInit {

  @Input() propsTest: string; 
  @Input() furitsList: string;

  constructor() { }

  ngOnInit(): void {
  }

}
```
> ***`[]`의 사용할 경우에는 표현식의 결과물, 사용하지 않을 경우에는 문자열을 보낸다.*** <br>
> `[]` 사용여부 잘 판단하기. <br>

## Angular Component4
[위로올라가기](강좌2)

`<button [disabled]="">요런거>/button>` <br>
#### AngularStudy\StudyProject\Front\src\app\sample3\sample3.component.html
```html
<button [disabled]="disabled">비 활성화</button>
```

#### AngularStudy\StudyProject\Front\src\app\sample3\sample3.component.ts
```js
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.scss']
})
export class Sample3Component implements OnInit {

  disabled: boolean = true; // 바인딩을 시킬 것이다.

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { 
      this.disabled = false; // false가 되면 버튼이 활성화가 된다.
    }, 1000);
  }
}
```
> 컴포넌트 내에 데이터와 템플릿 뷰를 적절히 일치시키는지 중요하다.

### @Output, EventEmitter

`<app-sample [click]="onClick()">>/app-sample>` <br>
> 버튼에 클릭이 이벤트가 아니라 커스텀 엘리멘트에 클릭 이벤트가 발생하는 것을 아는 것이다. <br>
> **부모가 이벤트를 감지하는 방식**을 알아볼 것이다. <br>

#### AngularStudy\StudyProject\Front\src\app\sample3\sample3.component.ts (변경 전)
```js
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.scss']
})
export class Sample3Component implements OnInit {

  disabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = false;
    }, 1000);
  }
}
```

#### AngularStudy\StudyProject\Front\src\app\app.component.html
```html
...생략
<app-sample3 ()="custom()"></app-sample3>

<router-outlet></router-outlet>
```
> `()` 안에 아직 변수명을 넣어주지 않았다.

#### AngularStudy\StudyProject\Front\src\app\app.component.ts
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-quick-start';
  fruits = ['apple', 'banana', 'graph'];

  // custom 함수 생성
  custom(): void {
    console.log('custom event')
  }
}

```

#### AngularStudy\StudyProject\Front\src\app\sample3\sample3.component.ts
```js
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // Output, EventEmitter 추가를 한다.

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.scss']
})
export class Sample3Component implements OnInit {

  @Output() custom = new EventEmitter(); // @output추가
  disabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = false;
      this.custom.emit(); // 이벤트가 발생한다. 
      // 이벤트갑 발생하는 건 부모가 안다. 그것을 custon에 연결한다.
    }, 1000);
  }

}

```

#### AngularStudy\StudyProject\Front\src\app\app.component.html
```html 
<div>Angular Study</div>
<app-sample2></app-sample2>
<app-sample3 propsTest="props Test hello props Test"></app-sample3>
<app-sample3 *ngFor="let fruits of fruits" [furitsList]="fruits"></app-sample3>
<app-sample3 (custom)="custom()"></app-sample3>

<router-outlet></router-outlet>
```
> ***(custom)*** : @Output에 선언 된 custom(변수 명) - 자식에 선언되어 있다.<br>
> ***custom()*** : 그 custom에 이벤트가 발생되면 부모의 호출되는 *함수 명* - 부모의 함수가 선언 되어있다.<br>

## Angular Component 연결1
[위로올라가기](강좌2)

컴포넌트 grand, parent, child 생성해준다. <br>

#### StudyProject\Front\src\app\parent\parent.component.html
```html
<p>parent works!</p>
<app-child name="Jeery" [age]="age" ></app-child>
```

#### StudyProject\Front\src\app\parent\parent.component.ts
```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  age: number = 20;

  constructor() { }
  ngOnInit(): void {
  }
}
```

#### StudyProject\Front\src\app\child\child.component.ts
```js
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;

  constructor() { }

  ngOnInit(): void {
  }

}

```

#### StudyProject\Front\src\app\child\child.component.html
```js
<p>child works!</p>
<h2>이름 : {{ name }}, 나이 : {{ age }} </h2>
```

> 부모의 state가 자식에게 전달하는 방식 

<br><br>

#### StudyProject\Front\src\app\parent\parent.component.html
```html
<p>parent works!</p>
<h2>{{ age }}</h2>
<app-child name="Jeery" [age]="age" (next)="next" ></app-child>
// next를 유심히 볼 것..
```

#### StudyProject\Front\src\app\child\child.component.ts
```js
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;

  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
```
> 자식에서는 Output을 사용한다. <br>
> 자식의 변수 next가 발생하면 **부모의 next의 함수**가 발생이 일어난다 <br>
>> 즉, 자식이 부모에게 이벤트를 전달(데이터 양방향의 특징이다.) <br>


## Angular Component 연결2
[위로올라가기](강좌2)

자식이 할아버지에게 데이터를 전달 할 것이다. <br>

#### StudyProject\Front\src\app\child\child.component.html
```html
<p>child works!</p>
<h2>이름 : {{ name }}, 나이 : {{ age }} </h2>
```

#### StudyProject\Front\src\app\child\child.component.ts
```js
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;

  @Output() next = new EventEmitter(); // 부모에게 데이터를 전달하기 위해서 @Output 생성

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.next.emit(); // 데이터를 전달 해줄 것이다. 
    }, 2500);
  }

}
```

#### StudyProject\Front\src\app\parent\parent.component.html
```html
<p>parent works!</p>
<h2>{{ age }}</h2>
<app-child name="Jeery" [age]="age" (next)="next()" ></app-child>

```
> `(next)`가 부모에게 데이터를 전달 하는 것이다. `()` <- 전달 <br>
>  `[age]`가 부모에게 데이터를 받는 것이다. <br>

#### StudyProject\Front\src\app\parent\parent.component.ts
```js
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() age: number;

  @Output() up = new EventEmitter(); // 부모에게 데이터를 전달하기 위해서 @Output 생성

  constructor() { }

  ngOnInit(): void {
  }
  
  next() {
    // this.age = this.age + 1 
    // 부모의 나이를 올리지 않을 것이다.
    this.up.emit(); // 이벤트 발생
  }
}
```

#### StudyProject\Front\src\app\grand\grand.component.html
```html
<p>grand works!</p>
<h2>{{ age }}</h2>
<!-- 관계를 규정해야한다. -->
<app-parent [age]="age" (up)="up()" ></app-parent>
```
> `(up)`가 부모에게 데이터를 전달 하는 것이다. 

#### StudyProject\Front\src\app\grand\grand.component.ts
```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.scss']
})
export class GrandComponent implements OnInit {
  age:number = 35;

  constructor() { }

  ngOnInit(): void {
  }

  // 여기서 받아 줄 데이터를 정한다.
  up(): void {
    this.age = this.age + 1; 
  }
}
```


```html
<input #myInput type="text">
<button (click)="click(myInput.value, $event)">Click me!</button>
```
> `click(myInput)"`에 value를 안 넣어주고 console.log를 해보면 input type가 표시된다. <br>
> input 데이터의 값을 볼려면 value도 넣어줘야한다. (자바스크립트 문법) <br> 

```js
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  ...생략

  click(text, event): void {
    console.log(text);
    console.log(event);
  }

}

```

> 템플릿 내에서 유효한 지시자처럼 사용할 수가 있다. <br>
> input에 데이터를 입력하고 버튼을 클릭하면 `console.log`에 입력한 데이터가 출력이 된다. <br>
>> `#myInput`를 사용 안 할 경우에는 프로퍼티(변수)를 만들고, 연결해주는 작업이 귀찮기 떄문이다. (간단하게 처리하기 위해서이다.) <br>