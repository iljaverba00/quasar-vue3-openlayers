import "vue3-openlayers/styles.css";
import OpenLayersMap from "vue3-openlayers";

export default ({ app, router, store }) => {
  app.use(OpenLayersMap );
}
