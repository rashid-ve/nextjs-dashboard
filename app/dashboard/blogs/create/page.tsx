// import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
// import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {
  // const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Blogs", href: "/dashboard/blogs" },
          {
            label: "Write New Blog",
            href: "/dashboard/blogs/create",
            active: true,
          },
        ]}
      />
      {/* <Form customers={customers} /> */}
    </main>
  );
}
