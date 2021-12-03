import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {
    return (
        <div class="sidebar">
          <Usuario usuario="catanacomics" nome="Catana" />
          <Sugestoes />
        </div>
    );
}