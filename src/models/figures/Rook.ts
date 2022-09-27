import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/black-rook.png";
import WhiteLogo from "../../assets/white-rook.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.ROOK;
  }
}
