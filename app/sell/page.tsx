import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";

export default function SellRoute(){
    return(
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
            <Card>
                <form>
                    <CardHeader>
                        <CardTitle>Sell Your Product With Ease</CardTitle>
                        <CardDescription>Please describe your product here in details so that it can be sold</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-10">
                        <div className="flex flex-col gap-y-2">
                            <Label>Name</Label>
                            <Input type="text" placeholder="Name Of Your Product"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Category</Label>
                            <SelectCategory />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Price</Label>
                            <Input type="number" placeholder="30$"/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Small Summary</Label>
                            <Textarea placeholder="Please describe your product shortly right here...."/>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Description</Label>
                            <TipTapEditor />
                            
                        </div>
                    </CardContent>
                </form>
            </Card>
        </section>
    )

}