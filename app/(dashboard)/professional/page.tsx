import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Shield,
  Users,
  FileText,
  TrendingUp,
  Clock,
  AlertCircle,
  BookOpen,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'

export default async function ProfessionalPage() {
  const session = await auth()

  if (!session || session.user.role === 'PARENT') {
    redirect('/dashboard')
  }

  // Mock data - will be replaced with real data from database
  const mockData = {
    totalClients: 12,
    activeClients: 8,
    pendingNotes: 3,
    thisWeekSessions: 24,
    recentClients: [
      {
        id: '1',
        name: 'Emma',
        age: 8,
        lastSession: '2 days ago',
        status: 'active',
        recentStory: 'Finding a Safe Place',
        concernLevel: 'low',
      },
      {
        id: '2',
        name: 'Lucas',
        age: 6,
        lastSession: '5 days ago',
        status: 'active',
        recentStory: 'Building Trust',
        concernLevel: 'medium',
      },
      {
        id: '3',
        name: 'Sophie',
        age: 9,
        lastSession: '1 day ago',
        status: 'active',
        recentStory: 'Understanding Feelings',
        concernLevel: 'low',
      },
    ],
    recentActivity: [
      {
        id: '1',
        child: 'Emma',
        action: 'Completed story',
        story: 'Finding a Safe Place',
        time: '2 hours ago',
      },
      {
        id: '2',
        child: 'Lucas',
        action: 'Started reading',
        story: 'Building Trust',
        time: '5 hours ago',
      },
      {
        id: '3',
        child: 'Sophie',
        action: 'Completed story',
        story: 'Understanding Feelings',
        time: '1 day ago',
      },
    ],
    insights: [
      {
        id: '1',
        type: 'positive',
        message: 'Emma showed increased engagement this week (+40%)',
      },
      {
        id: '2',
        type: 'attention',
        message: 'Lucas has not accessed platform in 5 days',
      },
      {
        id: '3',
        type: 'milestone',
        message: 'Sophie completed her 10th story!',
      },
    ],
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Professional Dashboard
        </h1>
        <p className="text-gray-600">
          Monitor client progress, add notes, and access conversation guides
        </p>
      </div>

      {/* Verification Status Banner */}
      <Card className="border-purple-200 bg-purple-50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-purple-900 mb-1">
                DBS Verification Status: Verified ✓
              </h3>
              <p className="text-sm text-purple-700">
                Your professional verification is active. You have full access to
                therapeutic tools and client data.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {mockData.totalClients}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active This Week</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {mockData.activeClients}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reading Sessions</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {mockData.thisWeekSessions}
                </p>
                <p className="text-xs text-gray-500 mt-1">This week</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Notes</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {mockData.pendingNotes}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights & Alerts */}
      {mockData.insights.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-purple-600" />
              Insights & Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.insights.map((insight) => (
                <div
                  key={insight.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    insight.type === 'positive'
                      ? 'bg-green-50 border-green-500'
                      : insight.type === 'attention'
                      ? 'bg-orange-50 border-orange-500'
                      : 'bg-blue-50 border-blue-500'
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      insight.type === 'positive'
                        ? 'text-green-900'
                        : insight.type === 'attention'
                        ? 'text-orange-900'
                        : 'text-blue-900'
                    }`}
                  >
                    {insight.message}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Client List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Clients</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.recentClients.map((client) => (
                <Link
                  key={client.id}
                  href={`/professional/clients/${client.id}`}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {client.name}, {client.age}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Last active: {client.lastSession}
                      </p>
                    </div>
                    <Badge
                      variant={
                        client.concernLevel === 'low'
                          ? 'success'
                          : client.concernLevel === 'medium'
                          ? 'warning'
                          : 'destructive'
                      }
                    >
                      {client.concernLevel}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>Recent: {client.recentStory}</span>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.child} {activity.action.toLowerCase()}
                    </p>
                    <p className="text-sm text-gray-600">{activity.story}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-auto py-6 flex-col gap-2" variant="outline">
              <FileText className="h-6 w-6" />
              <span>Add Therapeutic Note</span>
            </Button>
            <Button className="h-auto py-6 flex-col gap-2" variant="outline">
              <BookOpen className="h-6 w-6" />
              <span>View Conversation Guides</span>
            </Button>
            <Button className="h-auto py-6 flex-col gap-2" variant="outline">
              <Users className="h-6 w-6" />
              <span>Manage Client Assignments</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
