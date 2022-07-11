import InfoPopup from './InfoPopup';

export default {
  component: InfoPopup,
};

export const Default = () => (
  <div className="w-50 h-100 text-bg-light">
    <InfoPopup title="Test Title" content="hello content" />
  </div>
);
