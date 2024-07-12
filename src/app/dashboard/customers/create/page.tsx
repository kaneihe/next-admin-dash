
import Breadcrumbs from '@/app/components/ui/customers/breadcrumbs';
import CreateCustomerForm from '@/app/components/ui/customers/create-customer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '创建新客户',
};

export default async function Page() { 

  return (
    <main>
        <Breadcrumbs
        breadcrumbs={[
          { label: '客户', href: '/dashboard/customers' },
          {
            label: '创建客户',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />      
      <CreateCustomerForm />
    </main>
  );
}
