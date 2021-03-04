import ReactDom from "react-dom";

import {TasksProvider} from "./providers/TasksProvider";
import {App} from "./App";

ReactDom.render(
  <TasksProvider>
    <App />
  </TasksProvider>,
  document.querySelector(`#root`)
);
