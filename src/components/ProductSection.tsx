import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ProductAccordion"

const accordionData = [
  {
    title: "Testing the code",
    content:
      "For database systems, existing methods rely on testing the final code to ensure that it complies with the specification. However, this can require hundreds of hours of coding to be completed before any error is found. Fixing the errors also requires significant time and cost. Even then clients may change their minds when they see the system working!",
  },
  {
    title: "Testing is not proof of correctness",
    content: `We should note Professor Dijkstra's warning that: "Testing can show the presence of errors but never their absence".

The fact is that programming is a complex, labour-intensive and error-prone process. If a specification cannot be proven to be correct, the resulting software cannot be proven to comply with the specification.`,
  },
  {
    title: "Formal methods",
    content:
      "An alternative would be to use Formal Methods, such as Z or B languages. However, these are really only in the domain of highly qualified experts with formal maths and logic training.",
  },
  {
    title: "A better way",
    content:
      "What if there was a way that a software specification could be created that was proven to be correct, validated by the customer, and the system behaviour checked prior to any code being generated, and accessible to all programmers?",
  },
]

export function ProductSection() {
  return (
    <div className="sectionr">
      <Accordion type="single" defaultValue="item-0" className="w-full divide-y divide-brandBlue/50">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="mb-0"
          >
            <AccordionTrigger className="hover:no-underline py-2 text-left">
              <h3 className="text-h3 font-display text-brandBlue">{item.title}</h3>
            </AccordionTrigger>
            <AccordionContent className="text-body pl-0">
              <p className="whitespace-pre-line">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
