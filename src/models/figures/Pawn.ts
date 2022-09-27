import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/black-pawn.png";
import WhiteLogo from "../../assets/white-pawn.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.PAWN;
  }
}
