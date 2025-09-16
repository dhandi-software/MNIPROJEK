import { Link } from "react-router";
import { TabsList, TabsTrigger, Tabs } from "~/components/ui/tabs-underline";

export function TabsHelpDesktop() {
    return (
        <div className="sticky top-0 z-10 bg-white">
            <Tabs className="mt-xl" defaultValue="Account">
                <TabsList>
                    <TabsTrigger value="Account">Account</TabsTrigger>
                    <TabsTrigger value="ticket">Ticket</TabsTrigger>
                    <TabsTrigger value="event">Event</TabsTrigger>
                    <TabsTrigger value="organizer_forum">
                        Organizer forum
                    </TabsTrigger>
                    <TabsTrigger value="speaker/host_forum">
                        Speaker/Host forum
                    </TabsTrigger>
                    <TabsTrigger value="promotion">Promotion</TabsTrigger>
                    <TabsTrigger value="Payment">Payment</TabsTrigger>
                    <TabsTrigger value="refund_policy">
                        Refund Policy
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}
