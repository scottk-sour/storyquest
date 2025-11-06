import { use } from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  BookOpen,
  Clock,
  TrendingUp,
  FileText,
  AlertTriangle,
  Award,
  Calendar,
} from 'lucide-react'
import Link from 'next/link'

interface ClientPageProps {
  params: Promise<{ id: string }>
}

export default function ProfessionalClientPage({ params }: ClientPageProps) {
  const { id } = use(params)

  // Mock client data
  const client = {
    id,
    name: 'Emma',
    age: 8,
    avatar: '🧒',
    careStatus: 'Foster Care',
    careStatusVerified: true,
    joinedDate: '2024-09-15',
    lastActive: '2 days ago',
    assignedSince: '2024-09-20',
    therapeuticGoals: [
      'Build sense of safety and security',
      'Develop emotional regulation skills',
      'Strengthen attachment relationships',
    ],
    triggers: ['Loud noises', 'Separation from caregiver', 'Darkness'],
    traumaHistory: ['Neglect', 'Multiple placements'],
    stats: {
      storiesCompleted: 12,
      totalReadingTime: 180, // minutes
      averageSessionLength: 15,
      streakDays: 5,
      achievementsUnlocked: 4,
    },
    recentStories: [
      {
        id: '1',
        title: 'Finding a Safe Place',
        completedAt: '2024-11-04',
        emotionalResponse: 'hopeful',
        duration: 18,
        ending: 'positive',
      },
      {
        id: '2',
        title: 'Understanding Feelings',
        completedAt: '2024-11-02',
        emotionalResponse: 'happy',
        duration: 15,
        ending: 'positive',
      },
      {
        id: '3',
        title: 'Building Trust',
        completedAt: '2024-10-30',
        emotionalResponse: 'confused',
        duration: 20,
        ending: 'reflective',
      },
    ],
    therapeuticNotes: [
      {
        id: '1',
        date: '2024-11-01',
        type: 'Progress',
        excerpt: 'Emma showed increased engagement when discussing safe spaces...',
        author: 'Dr. Sarah Johnson',
      },
      {
        id: '2',
        date: '2024-10-25',
        type: 'Observation',
        excerpt: 'Noticed Emma becoming more comfortable expressing emotions...',
        author: 'Dr. Sarah Johnson',
      },
    ],
    achievements: [
      { icon: '📖', name: 'First Story', unlocked: true },
      { icon: '🌟', name: '5-Day Streak', unlocked: true },
      { icon: '💪', name: '10 Stories', unlocked: true },
      { icon: '🎯', name: 'Emotion Explorer', unlocked: true },
      { icon: '🏆', name: '20 Stories', unlocked: false },
      { icon: '⭐', name: 'Story Master', unlocked: false },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/professional">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">
            {client.name}, {client.age}
          </h1>
          <p className="text-gray-600">Last active: {client.lastActive}</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Add Note
        </Button>
      </div>

      {/* Care Status Card */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{client.careStatus}</Badge>
                {client.careStatusVerified && (
                  <Badge variant="success">Verified</Badge>
                )}
              </div>
              <p className="text-sm text-blue-700">
                Assigned to your care since{' '}
                {new Date(client.assignedSince).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {client.stats.storiesCompleted}
            </p>
            <p className="text-sm text-gray-600">Stories</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {client.stats.totalReadingTime}m
            </p>
            <p className="text-sm text-gray-600">Reading Time</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {client.stats.averageSessionLength}m
            </p>
            <p className="text-sm text-gray-600">Avg Session</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {client.stats.streakDays}
            </p>
            <p className="text-sm text-gray-600">Day Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {client.stats.achievementsUnlocked}
            </p>
            <p className="text-sm text-gray-600">Achievements</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Therapeutic Profile */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Therapeutic Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {client.therapeuticGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-sm text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <AlertTriangle className="h-5 w-5" />
                Known Triggers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {client.triggers.map((trigger, index) => (
                  <Badge key={index} variant="warning">
                    {trigger}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trauma History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {client.traumaHistory.map((item, index) => (
                  <Badge key={index} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                This information is confidential and should inform story
                selection and conversation guidance.
              </p>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {client.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`text-center p-3 rounded-lg ${
                      achievement.unlocked
                        ? 'bg-purple-50 border-2 border-purple-200'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                    }`}
                  >
                    <div className="text-3xl mb-1">{achievement.icon}</div>
                    <p className="text-xs font-medium text-gray-700">
                      {achievement.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity & Notes */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {client.recentStories.map((story) => (
                  <div
                    key={story.id}
                    className="p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {story.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {new Date(story.completedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge
                        variant={
                          story.emotionalResponse === 'happy' ||
                          story.emotionalResponse === 'hopeful'
                            ? 'success'
                            : 'secondary'
                        }
                      >
                        {story.emotionalResponse}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Duration: {story.duration}m</span>
                      <span>•</span>
                      <span>Ending: {story.ending}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Therapeutic Notes</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {client.therapeuticNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{note.type}</Badge>
                      <p className="text-xs text-gray-500">
                        {new Date(note.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{note.excerpt}</p>
                    <p className="text-xs text-gray-500">by {note.author}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
