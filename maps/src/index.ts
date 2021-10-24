import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

new google.maps.Map(document.querySelector("#map"), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});

const user = new User();
const company = new Company();
const customMap = new CustomMap("#map");

customMap.addMarker(user);
customMap.addMarker(company);
