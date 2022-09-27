import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/black-knight.png";
import WhiteLogo from "../../assets/white-knight.png";
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.KNIGHT;
  }
}
