import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { ArrowRight, Star } from "lucide-react";
import { Link } from 'react-router-dom'; 

const Home = () => {
  return <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
    {/* Hero Section */}
    <section className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-2xl text-muted-foreground mb-8">
        Experience the future of simplicity and efficiency.
      </p>
      <Link to="/client/products">
      <Button variant="default" size="lg">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      </Link>
    </section>

    {/* Image Gallery */}
    <section className="max-w-6xl w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64"></div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64"></div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64"></div>
      </div>
    </section>

    {/* Feature Highlights */}
    <section className="max-w-4xl w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowRight className="h-6 w-6" />
              Fast and Efficient Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our app processes tasks quickly and efficiently, saving you time.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowRight className="h-6 w-6" />
              Reliable and Secure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Enjoy peace of mind with our reliable and secure services.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowRight className="h-6 w-6" />
              User-Friendly Interface
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our intuitive interface makes it easy for everyone to use.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Product Highlights */}
    <section className="max-w-6xl w-full mb-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-xl w-full h-64 shadow-lg">
          <img
            src="https://cdn.creazilla.com/cliparts/77966/best-quality-stamp-clipart-lg.png"
            alt="Best Quality Stamp"
            className="max-h-48 object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-xl w-full h-64 shadow-lg">
          <img
            src="https://assets.aboutamazon.com/9c/7b/5e02715f4a97b4c27100614cafc2/hero3.jpg"
            alt="Amazon Service"
            className="max-h-48 object-contain"
          />
        </div>
      </div>
    </section>


    {/* Testimonials */}
    <section className="max-w-6xl w-full mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              "This app has transformed my workflow. It's fast, reliable, and easy to use."
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jane Smith</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              "The security features are top-notch. I feel very safe using this app."
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sam Johnson</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              "The user interface is intuitive and makes navigation a breeze."
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>

    {/* Call to Action (CTA) */}
    <section className="text-center">
      <p className="text-2xl text-muted-foreground mb-8">
        Ready to transform your experience? Get started today!
      </p>
      <Button variant="default" size="lg">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  </div>
};

export default Home;
