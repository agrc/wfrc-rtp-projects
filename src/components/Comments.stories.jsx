import { QueryClient, QueryClientProvider } from 'react-query';
import Comments from './Comments';

export default {
  component: Comments,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

export const Default = () => <Comments globalId="{4E84CF79-D876-405A-B0B3-8797E2A5860C}" />;
export const ExistingComments = () => <Comments globalId="{4E84CF79-D876-405A-B0B3-8797E2A5860B}" />;
