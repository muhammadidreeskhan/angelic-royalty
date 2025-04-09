export default function AccountOrders() {
  // Mock orders data
  const orders = [
    {
      id: "ORD-12345",
      date: "April 5, 2025",
      status: "Delivered",
      total: "$1,285.00",
      items: [
        {
          id: "rtw1",
          name: "Golden Light Blouse",
          price: "$1,200",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "ORD-12344",
      date: "March 28, 2025",
      status: "Processing",
      total: "$85.00",
      items: [
        {
          id: "mk1",
          name: "Divine Radiance Lipstick - Ruby",
          price: "$85",
          image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop",
        },
      ],
    },
  ]

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-amber-100 p-6 text-center">
        <h2 className="font-serif text-2xl text-amber-900 mb-4">Your Orders</h2>
        <p className="text-amber-800 mb-6">You haven't placed any orders yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-amber-100 p-6">
      <h2 className="font-serif text-2xl text-amber-900 mb-6">Your Orders</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border border-amber-200 rounded-lg overflow-hidden">
            <div className="bg-amber-50 p-4 flex flex-col sm:flex-row justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-amber-900">Order {order.id}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-amber-700">Placed on {order.date}</p>
              </div>
              <div className="mt-2 sm:mt-0">
                <p className="text-sm text-amber-700">
                  Total: <span className="font-medium text-amber-900">{order.total}</span>
                </p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-medium text-amber-700 mb-3">Items</h4>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-amber-900">{item.name}</h5>
                      <p className="text-sm text-amber-700">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
