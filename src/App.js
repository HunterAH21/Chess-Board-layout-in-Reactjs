import BBW from "./coins/B_bhishup_white.png"
import BBB from "./coins/B_bhishup_black.png"
import BKW from "./coins/B_king_white.png"
import BKnB from "./coins/B_knight_black.png"
import BKnW from "./coins/B_knight_white.png"
import BPB from "./coins/B_pawn_black.png"
import BPW from "./coins/B_pawn_white.png"
import BQB from "./coins/B_queen_black.png"
import BRW from "./coins/B_rook_white.png"
import BRB from "./coins/B_rook_black.png"
import WBW from "./coins/W_bishup_white.png"
import WBB from "./coins/W_bishup_black.png"
import WKnB from "./coins/W_knight_black.png"
import WKnW from "./coins/W_knight_white.png"
import WPB from "./coins/W_pawn_black.png"
import WPW from "./coins/W_pawn_white.png"
import WQW from "./coins/W_queen_white.png"
import WRW from "./coins/W_rook_white.png"
import WRB from "./coins/W_rook_black.png"
import WKB from "./coins/W_king_white.png"



import './App.css';
function App() {
  return (
    <div className="App">
     <h1>CHESS BOARD</h1>
    <div class="board">
        <table cellspacing="0px" cellpadding="30px">
            
        
             <tr>
                 <td class="whiteBOX" style={{backgroundImage:`url(${BRW})`,backgroundSize: "cover"}} ></td>
                 <td class="darkBOX" style={{backgroundImage:`url(${BKnB})`,backgroundSize: "cover"}}></td>
                 <td class="whiteBOX" style={{backgroundImage:`url(${BBW})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${BQB})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${BKW})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${BBB})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${BKnW})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${BRB})`,backgroundSize: "cover"}}></td> 
            </tr> 
             <tr>
                <td class="darkBOX" style={{backgroundImage:`url(${BPB})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${BPW})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${BPB})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${BPW})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${BPB})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${BPW})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${BPB})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${BPW})`,backgroundSize: "cover"}}></td>
            </tr>  
            <tr>
                <td class="whiteBOX"></td>
                <td class="darkBOX" ></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
            </tr>
            <tr>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
            </tr>
            <tr>
                <td class="whiteBOX"></td>
                <td class="darkBOX" ></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
            </tr>
            <tr>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
                <td class="darkBOX"></td>
                <td class="whiteBOX"></td>
            </tr>
             <tr>
             <td class="whiteBOX" style={{backgroundImage:`url(${WPW})`,backgroundSize: "cover"}}></td>
             <td class="darkBOX" style={{backgroundImage:`url(${WPB})`,backgroundSize: "cover"}}></td>
             <td class="whiteBOX" style={{backgroundImage:`url(${WPW})`,backgroundSize: "cover"}}></td>
             <td class="darkBOX" style={{backgroundImage:`url(${WPB})`,backgroundSize: "cover"}}></td>
             <td class="whiteBOX" style={{backgroundImage:`url(${WPW})`,backgroundSize: "cover"}}></td>
             <td class="darkBOX" style={{backgroundImage:`url(${WPB})`,backgroundSize: "cover"}}></td>
             <td class="whiteBOX" style={{backgroundImage:`url(${WPW})`,backgroundSize: "cover"}}></td>
             <td class="darkBOX" style={{backgroundImage:`url(${WPB})`,backgroundSize: "cover"}}></td>
            </tr>
            <tr>
                <td class="darkBOX" style={{backgroundImage:`url(${WRB})`,backgroundSize: "cover"}}></td> 
                <td class="darkBOX" style={{backgroundImage:`url(${WKnW})`,backgroundSize: "cover"}}></td>
                 <td class="whiteBOX" style={{backgroundImage:`url(${WBB})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${WQW})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${WKB})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${WBW})`,backgroundSize: "cover"}}></td>
                <td class="darkBOX" style={{backgroundImage:`url(${WKnB})`,backgroundSize: "cover"}}></td>
                <td class="whiteBOX" style={{backgroundImage:`url(${WRW})`,backgroundSize: "cover"}} ></td>

            </tr>   
        
        
        </table> 
</div>
    </div>
  );
}

export default App;
