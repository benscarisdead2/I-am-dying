var squares = document.querySelectorAll('.squares');
var answer = document.querySelector('.text-content');
var yeet;

for(let i = 0; i < squares.length; i++){
   squares[i].addEventListener('click', function(event){
   var boxValue = event.target.id;
   if(event.target.id === "clear"){
     answer.innerHTML = " ";
   }else if(event.target.id === "equal"){
       answer.innerHTML = eval(answer.innerHTML);
   } else {
   answer.value = answer.insertAdjacentHTML('beforeend', event.target.id);
    }
   console.log(boxValue);
 });
}

// quu..__
//  $$$b  `---.__
//   "$$b        `--.                          ___.---uuudP
//    `$$b           `.__.------.__     __.---'      $$$$"              .
//      "$b          -'            `-.-'            $$$"              .'|
//        ".                                       d$"             _.'  |
//          `.   /                              ..."             .'     |
//            `./                           ..::-'            _.'       |
//             /                         .:::-'            .-'         .'
//            :                          ::''\          _.'            |
//           .' .-.             .-.           `.      .'               |
//           : /'$$|           .@"$\           `.   .'              _.-'
//          .'|$u$$|          |$$,$$|           |  <            _.-'
//          | `:$$:'          :$$$$$:           `.  `.       .-'
//          :                  `"--'             |    `-.     \
//         :##.       ==             .###.       `.      `.    `\
//         |##:                      :###:        |        >     >
//         |#'     `..'`..'          `###'        x:      /     /
//          \                                   xXX|     /    ./
//           \                                xXXX'|    /   ./
//           /`-.                                  `.  /   /
//          :    `-  ...........,                   | /  .'
//          |         ``:::::::'       .            |<    `.
//          |             ```          |           x| \ `.:``.
//          |                         .'    /'   xXX|  `:`M`M':.
//          |    |                    ;    /:' xXXX'|  -'MMMMM:'
//          `.  .'                   :    /:'       |-'MMMM.-'
//           |  |                   .'   /'        .'MMM.-'
//           `'`'                   :  ,'          |MMM<
//             |                     `'            |tbap\
//              \                                  :MM.-'
//               \                 |              .''
//                \.               `.            /
//                 /     .:::::::.. :           /
//                |     .:::::::::::`.         /
//                |   .:::------------\       /
//               /   .''               >::'  /
//               `',:                 :    .'
//                                    `:.:' 