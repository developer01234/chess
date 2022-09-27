import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/black-queen.png";
import WhiteLogo from "../../assets/white-queen.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.QUEEN;
  }
}
