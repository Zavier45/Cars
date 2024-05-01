import {
  getWheels,
  getInteriors,
  getTechnologies,
  getPaints,
  getOrders,
} from "./database.js";

const paints = await getPaints();
const interiors = await getInteriors();
const techs = await getTechnologies();
const wheels = await getWheels();

export const Orders = async () => {
  const orders = await getOrders();

  return `${orders
    .map((order) => {
      return `<section class="order">
                ${order.paint.color} car with
                ${order.wheel.style} wheels,
                ${order.interior.material} interior,
                and the ${order.technology.package}
                for a total cost of
                ${order.totalCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            </section>`;
    })
    .join("")}`;
};
