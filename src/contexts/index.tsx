import { ReactNode } from 'react';

import Auth from './auth';

const DeliveryItContexts = ({ children }: { children: ReactNode }) => (
    <Auth>{children}</Auth>
);

export default DeliveryItContexts;
