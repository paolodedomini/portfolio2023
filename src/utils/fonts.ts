import { Poppins } from "next/font/google";
import { Cardo } from "next/font/google";
const main = Poppins({ weight: ["400", "700", "900"], subsets: ["latin-ext"] });
const title = Cardo({ weight: "700", subsets: ["latin-ext"] });

export { main, title };