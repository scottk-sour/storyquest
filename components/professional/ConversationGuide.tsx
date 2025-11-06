'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Eye, Activity, CheckCircle } from 'lucide-react'

interface ConversationGuideSection {
  title: string
  section: string
  questions: string[]
  activities: string[]
  observations: string[]
}

interface ConversationGuideProps {
  storyTitle: string
  therapeuticThemes: string[]
  sections: ConversationGuideSection[]
}

export function ConversationGuide({
  storyTitle,
  therapeuticThemes,
  sections,
}: ConversationGuideProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Conversation Guide: {storyTitle}
        </h2>
        <div className="flex flex-wrap gap-2">
          {therapeuticThemes.map((theme, index) => (
            <Badge key={index} variant="secondary">
              {theme}
            </Badge>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <Card className="border-purple-200 bg-purple-50">
        <CardContent className="pt-6">
          <p className="text-sm text-purple-900">
            <strong>How to use this guide:</strong> These conversation starters are
            designed to help children process the story's themes in a safe,
            supportive way. Follow the child's lead, and don't force discussion if
            they're not ready. Non-verbal responses are equally valid.
          </p>
        </CardContent>
      </Card>

      {/* Sections */}
      {sections.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {section.section === 'Before Reading' && (
                <MessageSquare className="h-5 w-5 text-blue-600" />
              )}
              {section.section === 'During' && (
                <Activity className="h-5 w-5 text-orange-600" />
              )}
              {section.section === 'After' && (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Questions */}
            {section.questions.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-purple-600" />
                  Discussion Questions
                </h4>
                <ul className="space-y-2">
                  {section.questions.map((question, qIndex) => (
                    <li
                      key={qIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            {section.activities.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-purple-600" />
                  Suggested Activities
                </h4>
                <ul className="space-y-2">
                  {section.activities.map((activity, aIndex) => (
                    <li
                      key={aIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Observations */}
            {section.observations.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-purple-600" />
                  What to Watch For
                </h4>
                <ul className="space-y-2">
                  {section.observations.map((observation, oIndex) => (
                    <li
                      key={oIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                      <span>{observation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Response Guide */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-orange-900">
            Responding to Difficult Emotions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-orange-900">
            <div>
              <strong>If the child becomes distressed:</strong>
              <ul className="ml-4 mt-1 space-y-1">
                <li>• Pause the activity immediately</li>
                <li>• Validate their feelings: "It's okay to feel upset"</li>
                <li>• Offer comfort and a safe space</li>
                <li>• Don't force them to continue</li>
              </ul>
            </div>
            <div>
              <strong>If the child discloses trauma:</strong>
              <ul className="ml-4 mt-1 space-y-1">
                <li>• Listen without judgment</li>
                <li>• Thank them for sharing</li>
                <li>• Follow safeguarding protocols</li>
                <li>• Document appropriately</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Example usage component
export function ConversationGuideExample() {
  const exampleGuide = {
    storyTitle: 'Finding a Safe Place',
    therapeuticThemes: ['Safety', 'Security', 'Attachment', 'Home'],
    sections: [
      {
        title: 'Before Reading',
        section: 'Before Reading',
        questions: [
          'Have you ever felt really safe somewhere? What made it feel safe?',
          'What things help you feel calm and comfortable?',
          'Who are the people that make you feel safe?',
        ],
        activities: [
          'Draw or describe your "safe place" - real or imaginary',
          'Create a list of things that make you feel safe',
        ],
        observations: [
          'Body language when discussing safety',
          'Ability to identify safe people and places',
          'Signs of anxiety or avoidance',
        ],
      },
      {
        title: 'During the Story',
        section: 'During',
        questions: [
          'How do you think the character is feeling right now?',
          'What would you do if you were in their situation?',
          'Which choice would make you feel safest?',
        ],
        activities: [
          'Pause at key moments to check in with feelings',
          'Role-play alternative choices',
        ],
        observations: [
          'Engagement level with safety themes',
          'Identification with the character',
          'Emotional responses to different scenarios',
        ],
      },
      {
        title: 'After Reading',
        section: 'After',
        questions: [
          'What did you think about the story?',
          'How did the character find their safe place?',
          'What makes a place feel like home to you?',
          'Is there anything from the story you'd like to try?',
        ],
        activities: [
          'Create a "safety plan" together',
          'Make a comfort box with safe, calming items',
          'Write or draw about their own safe place',
        ],
        observations: [
          'Ability to articulate feelings about safety',
          'Connection between story and own experiences',
          'Readiness to apply concepts to their life',
        ],
      },
    ],
  }

  return <ConversationGuide {...exampleGuide} />
}
