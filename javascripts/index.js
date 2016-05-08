import components from './components';
import helpers from './helpers';

const renderHelper = new helpers.RenderHelper();

const world = new components.World();

renderHelper.renderComponent(components.World);
world.drawCircle();
