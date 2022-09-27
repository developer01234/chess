import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/black-bishop.png";
import WhiteLogo from "../../assets/white-bishop.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.BISHOP;
  }
}
