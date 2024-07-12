import { notFound} from "next/navigation";
import EditCustomerForm from "@/app/components/ui/customers/edit-customer";
import { fetchCustomerById } from "@/app/lib/db";
import Breadcrumbs from "@/app/components/ui/customers/breadcrumbs";

export default async function Page({ params }: { params: { id: number } }) {  
  const id = params.id;
  console.log("edit customer id = ", id);
  const customer = await fetchCustomerById(id);
  console.log("edit customer = ", customer);
  if (!customer) {
    notFound;
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "客户(Customers)", href: "/dashboard/customers" },
          {
            label: "编辑客户(Edit Customer)",
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditCustomerForm customer={customer} />
    </main>
  );
}
