import TutorialList from "../components/TutorialList/TutorialList";
import AddTutorialForm from "../components/AddTutorialForm/AddTutorialForm";
import UpdateTutorialForm from "../components/UpdateTutorialForm/UpdateTutorialForm";

export const RoutePath = {
  TutorialList: "/home",
  AddTutorialForm: "/add",
  UpdateTutorialForm: "/update/:id",
};

export const routes = [
  {
    name: "AddTutorialForm",
    path: RoutePath.AddTutorialForm,
    component: AddTutorialForm,
  },
  {
    name: "UpdateTutorialForm",
    path: RoutePath.UpdateTutorialForm,
    component: UpdateTutorialForm,
  },
  {
    name: "TutorialList",
    path: RoutePath.TutorialList,
    component: TutorialList,
  },
];
