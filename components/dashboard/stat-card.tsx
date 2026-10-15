import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type StatCardProps = {
    title: string,
    value: number,
    description: string,
}

export default function StatCard({title, value, description}: StatCardProps) {
    return (
    <Card>
        <CardHeader>
            <CardTitle>
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
    )
} 