function outer(){

    let arr=[]  //가려져있음. 접근제한 따라서 add라는 function만 접근
    let idx=0

    function add(todo){
        todo.idx=idx++
        arr.push(todo)

    }
    function removeTodo(num) {
        console.log("remove Todo,,,")
        const result= arr.filter(todo=> todo.idx !==num)
        arr=result;
        // arr.splice(idx,1)
    }

    function getTodo(idx){
        console.log("getTodo...........")
    }

    function getAll(){
        return arr
    } //전체기능을 가져오는것

    function changeAll(){
        for (let i = 0; i <arr.length ; i++) {
            arr[i].complete=!arr[i].complete
            //true->false, false->true
        }
    }

    const obj={add,removeTodo,getTodo,getAll,changeAll}
    //add라는 키값  ,값은 이 add라는 function으로 반환

    return obj
}

//클로저 (면접문제 나옴): 함수 상태를 유지 ->돼지저금통, java클래스의 인스턴스 (JS 모듈패턴: 내부 상태를 조작하는 함수들을 반환 )
//이벤트 (면접문제 자주나옴): 버블링/캡쳐링
  //stopPropagation(): 이벤트전파차단     ->이벤트 처리시에 dom에 x -> 동적으로 생성
   // preventDefault(): 기본동작을 막는다.
//target : 실제로 이벤트가 발생한 element
