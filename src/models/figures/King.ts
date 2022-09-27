import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/black-king.png";
import WhiteLogo from "../../assets/white-king.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.KING;
  }
}
